using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Shared.Abstractions.Exceptions;

namespace Shared.Infrastructure.Middleware;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;

    public ExceptionHandlingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (BaseException ex)
        {
            context.Response.StatusCode = ex.StatusCode;
            context.Response.ContentType = "application/json";

            var response = new { error = ex.Message };

            if (ex is ValidationException validationEx)
            {
                var validationResponse = new { error = ex.Message, errors = validationEx.Errors };
                await context.Response.WriteAsync(JsonSerializer.Serialize(validationResponse));
                return;
            }

            await context.Response.WriteAsync(JsonSerializer.Serialize(response));
        }
        catch (Exception)
        {
            context.Response.StatusCode = 500;
            context.Response.ContentType = "application/json";

            var response = new { error = "An unexpected error occurred." };
            await context.Response.WriteAsync(JsonSerializer.Serialize(response));
        }
    }
}
