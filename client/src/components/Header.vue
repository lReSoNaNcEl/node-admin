<template>
    <header class="header-layout">
        <div class="container header">
            <router-link to="/">
                <img class="header__logo" src="https://cdn.promodj.com/afs/61ce52c982be685a7c7e238dfaceb91612:resize:2000x2000:same:7b6579"/>
            </router-link>

            <nav class="header__navmenu">
                <router-link to="/news" class="navmenu__link">News</router-link>
                <router-link to="#" class="navmenu__link">Gallery</router-link>
                <router-link to="#" class="navmenu__link">Profile</router-link>
            </nav>

            <div class="header__auth">
                <router-link to="#" class="navmenu__link">Login</router-link>
                <router-link to="#" class="navmenu__link">Signup</router-link>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    .header-layout {
        padding: 3rem 0;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header__logo {
        max-width: 4rem;
    }

    .navmenu__link {
        position: relative;
        font-size: 24px;
        margin: 0 1rem 0 0;
        transition: .5s all;
        &:hover {
            color: goldenrod;
        }
        &:hover::before {transform: scale(1);}
        &:last-child {margin: 0;}
        &::before {
            content: "";
            width: 100%;
            height: 2px;
            position: absolute;
            top: 100%;
            background-color: goldenrod;
            transform: scale(0);
            transition: transform .5s;
        }
    }
</style>