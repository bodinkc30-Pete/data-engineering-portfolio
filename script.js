"use strict";

/*
|--------------------------------------------------------------------------
| Portfolio Website JavaScript
|--------------------------------------------------------------------------
| หน้าที่ของไฟล์นี้:
| 1. เปิดและปิดเมนูบนหน้าจอมือถือ
| 2. ปิดเมนูเมื่อผู้ใช้กดลิงก์
| 3. เปลี่ยนสถานะ Active ของเมนูตามส่วนที่กำลังดู
| 4. ปิดเมนูด้วยปุ่ม Escape
| 5. รีเซ็ตเมนูเมื่อหน้าจอกลับเป็นขนาด Desktop
| 6. แสดงปีปัจจุบันใน Footer
|--------------------------------------------------------------------------
*/

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const sidebarNavigation = document.querySelector(
        "#sidebar-navigation"
    );

    const mobileMenuButton = document.querySelector(
        ".mobile-menu-button"
    );

    const navigationLinks = Array.from(
        document.querySelectorAll(".nav-link")
    );

    const sectionLinks = Array.from(
        document.querySelectorAll(
            '.nav-link[href^="#"], .top-navigation a[href^="#"]'
        )
    );

    const pageSections = Array.from(
        document.querySelectorAll(
            "main section[id]"
        )
    );

    const currentYearElement = document.querySelector(
        "#current-year"
    );

    /*
    |--------------------------------------------------------------------------
    | แสดงปีปัจจุบันใน Footer
    |--------------------------------------------------------------------------
    */

    if (currentYearElement) {
        currentYearElement.textContent =
            new Date().getFullYear().toString();
    }

    /*
    |--------------------------------------------------------------------------
    | ฟังก์ชันเปิดเมนูมือถือ
    |--------------------------------------------------------------------------
    */

    const openMobileMenu = () => {
        if (!sidebarNavigation || !mobileMenuButton) {
            return;
        }

        sidebarNavigation.classList.add("open");
        mobileMenuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        body.classList.add("menu-open");
    };

    /*
    |--------------------------------------------------------------------------
    | ฟังก์ชันปิดเมนูมือถือ
    |--------------------------------------------------------------------------
    */

    const closeMobileMenu = () => {
        if (!sidebarNavigation || !mobileMenuButton) {
            return;
        }

        sidebarNavigation.classList.remove("open");
        mobileMenuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        body.classList.remove("menu-open");
    };

    /*
    |--------------------------------------------------------------------------
    | ฟังก์ชันสลับสถานะเมนูมือถือ
    |--------------------------------------------------------------------------
    */

    const toggleMobileMenu = () => {
        if (!sidebarNavigation) {
            return;
        }

        const isMenuOpen =
            sidebarNavigation.classList.contains("open");

        if (isMenuOpen) {
            closeMobileMenu();
            return;
        }

        openMobileMenu();
    };

    /*
    |--------------------------------------------------------------------------
    | กดปุ่มแล้วเปิดหรือปิดเมนูมือถือ
    |--------------------------------------------------------------------------
    */

    if (mobileMenuButton) {
        mobileMenuButton.addEventListener(
            "click",
            toggleMobileMenu
        );
    }

    /*
    |--------------------------------------------------------------------------
    | กดลิงก์ภายในหน้าเว็บ
    |--------------------------------------------------------------------------
    */

    sectionLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                !targetId.startsWith("#")
            ) {
                return;
            }

            const targetSection =
                document.querySelector(targetId);

            if (!targetSection) {
                return;
            }

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            closeMobileMenu();

            window.history.replaceState(
                null,
                "",
                targetId
            );
        });
    });

    /*
    |--------------------------------------------------------------------------
    | ฟังก์ชันกำหนดเมนู Active
    |--------------------------------------------------------------------------
    */

    const setActiveNavigation = (sectionId) => {
        navigationLinks.forEach((link) => {
            const linkTarget =
                link.getAttribute("href");

            const isActive =
                linkTarget === `#${sectionId}`;

            link.classList.toggle(
                "active",
                isActive
            );

            if (isActive) {
                link.setAttribute(
                    "aria-current",
                    "page"
                );
            } else {
                link.removeAttribute(
                    "aria-current"
                );
            }
        });
    };

    /*
    |--------------------------------------------------------------------------
    | ตรวจจับ Section ที่ผู้ใช้กำลังดู
    |--------------------------------------------------------------------------
    */

    if (
        "IntersectionObserver" in window &&
        pageSections.length > 0
    ) {
        const visibleSections = new Map();

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            visibleSections.set(
                                entry.target.id,
                                entry.intersectionRatio
                            );
                        } else {
                            visibleSections.delete(
                                entry.target.id
                            );
                        }
                    });

                    if (visibleSections.size === 0) {
                        return;
                    }

                    const mostVisibleSection =
                        Array.from(
                            visibleSections.entries()
                        ).sort(
                            (firstSection, secondSection) =>
                                secondSection[1] -
                                firstSection[1]
                        )[0];

                    const activeSectionId =
                        mostVisibleSection[0];

                    setActiveNavigation(
                        activeSectionId
                    );
                },
                {
                    root: null,

                    rootMargin:
                        "-20% 0px -55% 0px",

                    threshold: [
                        0.05,
                        0.15,
                        0.25,
                        0.4,
                        0.6
                    ]
                }
            );

        pageSections.forEach((section) => {
            sectionObserver.observe(section);
        });
    }

    /*
    |--------------------------------------------------------------------------
    | กำหนด Active เริ่มต้นจาก URL
    |--------------------------------------------------------------------------
    */

    const initialHash =
        window.location.hash.replace("#", "");

    if (
        initialHash &&
        document.getElementById(initialHash)
    ) {
        setActiveNavigation(initialHash);
    } else {
        setActiveNavigation("home");
    }

    /*
    |--------------------------------------------------------------------------
    | กด Escape เพื่อปิดเมนูมือถือ
    |--------------------------------------------------------------------------
    */

    document.addEventListener(
        "keydown",
        (event) => {
            if (event.key === "Escape") {
                closeMobileMenu();
            }
        }
    );

    /*
    |--------------------------------------------------------------------------
    | กดพื้นที่นอกเมนูเพื่อปิดเมนูมือถือ
    |--------------------------------------------------------------------------
    */

    document.addEventListener(
        "click",
        (event) => {
            if (
                !sidebarNavigation ||
                !mobileMenuButton
            ) {
                return;
            }

            const isMenuOpen =
                sidebarNavigation.classList.contains(
                    "open"
                );

            if (!isMenuOpen) {
                return;
            }

            const clickedInsideNavigation =
                sidebarNavigation.contains(
                    event.target
                );

            const clickedMenuButton =
                mobileMenuButton.contains(
                    event.target
                );

            if (
                !clickedInsideNavigation &&
                !clickedMenuButton
            ) {
                closeMobileMenu();
            }
        }
    );

    /*
    |--------------------------------------------------------------------------
    | เมื่อหน้าจอกลับเป็น Desktop ให้ปิดเมนูมือถือ
    |--------------------------------------------------------------------------
    */

    window.addEventListener(
        "resize",
        () => {
            if (window.innerWidth > 980) {
                closeMobileMenu();
            }
        }
    );
});