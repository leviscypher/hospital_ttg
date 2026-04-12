using Modules.Auth;
using Modules.System;
using Modules.Article;
using Shared.Infrastructure;
using Shared.Infrastructure.Middleware;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Shared infrastructure (DbContext, UnitOfWork)
builder.Services.AddSharedInfrastructure(builder.Configuration);

// Modules
builder.Services.AddAuthModule(builder.Configuration);
builder.Services.AddSystemModule(builder.Configuration);
builder.Services.AddArticleModule(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseMiddleware<ExceptionHandlingMiddleware>();
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
