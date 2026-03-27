import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {

  return (
    <div>
      <aside className="sidebar sidebar-default sidebar-white sidebar-base navs-rounded-all ">
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <a href="" className="navbar-brand">
            <div className="logo-main">
              <div className="logo-normal">
                <svg
                  className=" icon-30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    x="-0.757324"
                    y="19.2427"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(-45 -0.757324 19.2427)"
                    fill="currentColor"
                  />
                  <rect
                    x="7.72803"
                    y="27.728"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(-45 7.72803 27.728)"
                    fill="currentColor"
                  />
                  <rect
                    x="10.5366"
                    y="16.3945"
                    width="16"
                    height="4"
                    rx="2"
                    transform="rotate(45 10.5366 16.3945)"
                    fill="currentColor"
                  />
                  <rect
                    x="10.5562"
                    y="-0.556152"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(45 10.5562 -0.556152)"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <h4 className="logo-title">Hope UI</h4>
          </a>
        </div>
        <div className="sidebar-body pt-0 data-scrollbar">
          <div className="sidebar-list">
            <ul className="navbar-nav iq-main-menu" id="sidebar-menu">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="../dashboard/index.html">
                  <i className="icon">
                    <svg
                      width="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-20">
                      <path
                        opacity="0.4"
                        d="M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z"
                        fill="currentColor"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z"
                        fill="currentColor"></path>
                    </svg>
                  </i>
                  <span className="item-name">Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-footer"></div>
      </aside>
      <main className="main-content">
        <div className="position-relative iq-banner">
          <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar">
              <ul className="mb-2 navbar-nav ms-auto align-items-center navbar-list mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="py-0 nav-link d-flex align-items-center"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img
                        src="https://hanhtrinhdelta.edu.vn/wp-content/uploads/2025/08/avatar-fb-da-dang-cho-nhieu-muc-dich.jpg"
                        alt="User-Profile"
                        className="theme-color-default-img img-fluid avatar avatar-50 avatar-rounded"
                      />
                      <div className="caption ms-3 d-none d-md-block ">
                        <h6 className="mb-0 caption-title">
                          Austin Robertson
                        </h6>
                        <p className="mb-0 caption-sub-title">
                          Marketing Administrator
                        </p>
                      </div>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdown">
                      <li>
                        <a
                          className="dropdown-item"
                          href="../dashboard/app/user-profile.html">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="../dashboard/app/user-privacy-setting.html">
                          Privacy Setting
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="../dashboard/auth/sign-in.html">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}
