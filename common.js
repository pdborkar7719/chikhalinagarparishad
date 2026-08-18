document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       COMMON HEADER
    ========================================= */

    const headerHTML = `
        <header class="main-header">

            <div class="header-left-image">
                <img src="images/left-person.png" alt="नगर परिषद">
            </div>

            <div class="header-title">
                <h1>चिखली नगर परिषद</h1>
                <p>स्वच्छ • सुंदर • स्मार्ट शहर</p>
            </div>

            <div class="header-right-image">
                <img src="images/right-person.png" alt="नगर परिषद प्रतिनिधी">
            </div>

        </header>
    `;


    /* =========================================
       COMMON FOOTER
    ========================================= */

    const footerHTML = `
        <div class="common-footer">

            <div class="footer-city-image">
                <img src="images/footer-bg.png" alt="नगर परिषद">
            </div>

        </div>

        <nav class="mobile-bottom-nav">

            <a href="index.html" class="bottom-item">
                <i class="fa-solid fa-house"></i>
                <span>मुख्यपृष्ठ</span>
            </a>

            <a href="index.html#services" class="bottom-item">
                <i class="fa-solid fa-grip"></i>
                <span>सेवा</span>
            </a>

            <a href="#" class="bottom-item notification">
                <div class="notification-icon">
                    <i class="fa-regular fa-bell"></i>
                    <b>3</b>
                </div>
                <span>सूचना</span>
            </a>

            <a href="#" class="bottom-item">
                <i class="fa-regular fa-file-lines"></i>
                <span>माहिती</span>
            </a>

            <a href="#" class="bottom-item">
                <i class="fa-solid fa-bars"></i>
                <span>अधिक</span>
            </a>

        </nav>
    `;


    /* =========================================
       REMOVE OLD HEADERS / FOOTERS
    ========================================= */

    document.querySelectorAll(
        ".gov-top-bar, .government-header, .page-header"
    ).forEach(function (element) {
        element.remove();
    });

    document.querySelectorAll(
        ".common-footer, .mobile-bottom-nav"
    ).forEach(function (element) {
        element.remove();
    });


    /* =========================================
       ADD HEADER
    ========================================= */

    document.body.insertAdjacentHTML(
        "afterbegin",
        headerHTML
    );


    /* =========================================
       FOOTER MUST BE LAST IN BODY
    ========================================= */

    document.body.insertAdjacentHTML(
        "beforeend",
        footerHTML
    );


    /* =========================================
       CSS
    ========================================= */

    const style = document.createElement("style");

    style.innerHTML = `

        /* =====================================
           PAGE
        ===================================== */

        html {
            margin: 0 !important;
            padding: 0 !important;

            width: 100%;
            min-height: 100%;

            overflow-x: hidden !important;
            overflow-y: auto !important;
        }


        body {
            margin: 0 !important;

            width: 100%;
            min-height: 100vh;

            height: auto !important;

            padding-top: 76px !important;

            /* bottom nav sathi space */
            padding-bottom: 100px !important;

            overflow-x: hidden !important;
            overflow-y: auto !important;
        }


        /* =====================================
           FORM / MAIN
        ===================================== */

        main.form-container,
        .form-container {

            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;

            overflow: visible !important;

            position: relative !important;
        }


        /* =====================================
           FIXED HEADER
        ===================================== */

        .main-header {

            position: fixed !important;

            top: 0;
            left: 0;

            width: 100%;
            height: 76px;

            z-index: 9999;

            display: flex;

            align-items: center;
            justify-content: space-between;

            padding: 0 8px;

            box-sizing: border-box;

            background: #ffffff;

            border-top: 7px solid #f47721;

            box-shadow:
                0 2px 8px rgba(0,0,0,0.10);
        }


        .header-left-image,
        .header-right-image {

            width: 82px;
            height: 62px;

            flex-shrink: 0;

            display: flex;

            align-items: center;
            justify-content: center;

            overflow: hidden;
        }


        .header-left-image img,
        .header-right-image img {

            width: 100%;
            height: 100%;

            object-fit: contain;
        }


        .header-title {

            flex: 1;

            text-align: center;

            line-height: 1.1;
        }


        .header-title h1 {

            margin: 0;

            color: #f47721;

            font-size: 24px;

            font-weight: 800;
        }


        .header-title p {

            margin: 2px 0 0;

            color: #555;

            font-size: 13px;

            font-weight: 600;
        }


        /* =====================================
           FOOTER IMAGE
           
           NORMAL FLOW
           ONLY AT VERY END OF PAGE
        ===================================== */
.common-footer {
    position: fixed !important;

    left: 0 !important;
    bottom: 55px !important;

    width: 100% !important;
    height: 45px !important;

    margin: 0 !important;
    padding: 0 !important;

    z-index: 9998 !important;

    background: #ffffff !important;

    box-sizing: border-box !important;
}

.footer-city-image {
    width: 100% !important;
    height: 45px !important;
    margin: 0 !important;
    padding: 0 !important;
}

.footer-city-image img {
    width: 100% !important;
    height: 45px !important;
    display: block !important;
    object-fit: cover !important;
}
        /* =====================================
           FIXED BOTTOM NAV
        ===================================== */

        .mobile-bottom-nav {

            position: fixed !important;

            left: 0;
            bottom: 0;

            width: 100%;
            height: 55px;

            z-index: 10000;

            display: flex;

            align-items: center;
            justify-content: space-around;

            margin: 0 !important;
            padding: 0 !important;

            background: #ffffff;

            box-shadow:
                0 -2px 10px rgba(0,0,0,0.12);

            box-sizing: border-box;
        }


        .bottom-item {

            flex: 1;

            height: 55px;

            display: flex;

            flex-direction: column;

            align-items: center;
            justify-content: center;

            gap: 3px;

            text-decoration: none;

            color: #444;

            font-size: 11px;
        }


        .bottom-item i {

            font-size: 19px;
        }


        .bottom-item:hover {

            color: #f47721;
        }


        /* =====================================
           NOTIFICATION
        ===================================== */

        .notification-icon {

            position: relative;
        }


        .notification-icon b {

            position: absolute;

            top: -8px;
            right: -10px;

            min-width: 15px;
            height: 15px;

            display: flex;

            align-items: center;
            justify-content: center;

            border-radius: 50%;

            background: #f47721;

            color: #ffffff;

            font-size: 9px;
        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 600px) {

            .main-header {

                height: 76px;
            }


            .header-left-image,
            .header-right-image {

                width: 82px;
                height: 62px;
            }


            .header-title h1 {

                font-size: 23px;
            }


            .header-title p {

                font-size: 12px;
            }


            


            .footer-city-image,
            .footer-city-image img {

                height: 45px;
            }

        }

    `;

    document.head.appendChild(style);

});
