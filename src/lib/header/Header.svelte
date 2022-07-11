<script lang="ts">
    import {page} from '$app/stores';
</script>

<header>
    <div class="header">
        <div class="header_inner">
            <div class="item1">
                <div class="header_logo">
                    <li class:active={$page.url.pathname === '/'}>
                        <a class="header_Home" sveltekit:prefetch href="/">Home</a>
                    </li>
                </div>
            </div>
            <div class="item1">
                <nav class="nav">
                    <ul>
                        <li class:active={$page.url.pathname === '/about'}>
                            <a class="nav_link" sveltekit:prefetch href="/about">About</a>
                        </li>
                        <li class:active={$page.url.pathname === '/todos'}>
                            <a class="nav_link" sveltekit:prefetch href="/todos">Project</a>
                        </li>
                    </ul>

                </nav>
            </div>
        </div>
    </div>

</header>

<style>

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        background-size: contain;
    }

    li {
        position: relative;
        height: 100%;
    }

    .header {
        width: 100%;
        position: absolute;
        height: 70px;
        background: #FFECEB;
        border-bottom: 4px solid #FFFFFF;
        align-items: center;
    }

    .header_inner {
        display: flex;
        /*height: 70px;*/
        justify-content: space-between;
        align-items: center;
        top: 5%;
    }

    .header_Home {
        font-family: 'Inika';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 47px;
        display: flex;
        align-items: center;
        text-align: center;
        text-decoration-line: none;
        text-transform: uppercase;

        color: #876D6D;
    }

    .header_Home:hover {
        color: #594646;
        text-decoration-line: underline;
    }

    .nav {
        text-transform: uppercase;

    }

    .nav_link:hover {
        color: #594646;
        text-decoration-line: underline;

    }

    .nav_link {
        display: inline-block;
        vertical-align: top;
        margin: 26px;
        color: #876D6D;
        text-decoration: none;
        font-family: 'Inika';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 47px;

        transition: color .2s linear;
    }


</style>
