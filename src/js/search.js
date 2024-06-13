document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelector('.footer__container') && document.querySelector('.gif')) {
        const gifFootLog = document.querySelector('.gif');
        const gifFootImg = gifFootLog.querySelectorAll('img');

        gifFootImg.forEach(element => {
            setInterval(() => {
                element.classList.toggle("invise_2");
            }, 3000);
        });
    }

    if (document.querySelector('.adr__container') && document.querySelector('.mail')) {
        const adrContainer = document.querySelector('.adr__container');
        const mailCont = document.querySelector('.mail');
        let copyMail = mailCont.cloneNode(true);
        adrContainer.appendChild(copyMail);
    }

    if (document.querySelector('.search__container')) {
        const searchContainer = document.querySelector('.search__container');
        const searchForm = searchContainer.querySelector('.search__form');
        const searchInput = searchContainer.querySelector('#search');
        const searchRez = searchContainer.querySelector('.rez');
        const searchBtn = searchContainer.querySelector('.search');

        searchBtn.addEventListener('click', () => {
            searchContainer.classList.add("open");
            searchInput.focus();
        })

        searchInput.addEventListener('blur', (e) => {
            setTimeout(() => {
                searchContainer.classList.remove("open");
                searchForm.classList.remove("open");
            }, 300);
        })

        searchInput.addEventListener('focus', () => {
            if (searchInput.value.length > 2) {
                searchForm.classList.add("open");
            }
        })

        searchInput.addEventListener('input', () => {
            if (searchInput.value.length > 2) {
                searchForm.classList.add("open");
            } else {
                searchForm.classList.remove("open");
            }
        })
    }

    if (document.querySelector('.catalog__link')) {
        const catalogLink = document.querySelector('.catalog__link');
        if (document.querySelector('.catalog_tec')) {
            const catalogTec = document.querySelector('.catalog_tec');

            catalogLink.addEventListener('click', () => {
                catalogTec.classList.toggle("open");
            })

            window.addEventListener('click', (e) => {
                if (!document.getElementById('catalog_tec').contains(e.target) && e.target.id != "catalogLink") {
                    catalogTec.classList.remove("open");
                }
            })
        }
    }

    if (document.querySelector('.nav__header')) {
        const navHeader = document.querySelector('.nav__header');
        const navContainer = navHeader.querySelector('.cont');
        const burgerBtn = document.querySelectorAll('.burger_btn');
        const overlay = document.querySelector('.overlay');

        burgerBtn.forEach(element => {
            element.addEventListener('click', () => {
                document.querySelector('.burger_btn_1').classList.toggle("invise");
                document.querySelector('.burger_btn_2').classList.toggle("invise");
                navContainer.classList.toggle("open");
                overlay.classList.toggle("open");
            })
        });
        overlay.addEventListener('click', () => {
            navContainer.classList.remove("open");
            overlay.classList.remove("open");
        })
    }
});