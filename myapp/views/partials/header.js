
<header class="main-header">
<div class="container">
    <div class="row align-items-center">
        <div class="col-5 col-md-2">
            <a href="index.html" class="main-header_home-link">
                <img src="/images/logo-mercado-liebre.svg">
            </a>
        </div>

        <div class="col-7 col-md-6">
            <form action="search-results.html" method="GET" class="search-form">
                <input type="text" name="search" placeholder="Buscar productos, marcas y más"
                    class="search-form_input">
                <button type="submit" class="search-form_button"><i class="fas fa-search"></i></button>
            </form>
        </div>

        <div class="col-12 col-md-4">
            <a class="main-header_credit-link">
                <i class="fas fa-hand-holding-usd"></i>
                Todas las opiniones en un solo lugar.
            </a>
        </div>
    </div>

    <button class="btn-toggle-navbar">
        <i class="fas fa-bars"></i>
    </button>

    <nav class="main-navbar">
        <ul class="left-navbar">
            <li><a href="index.html">Todos los productos</a></li>
            <!-- solo logueado <li><a href="">Cargar productos</a></li> -->
        </ul>

        <ul class="right-navbar">
            <!-- Solo logueado <li><a href="profile.html">
                        Nombre del usuario <i class="fas fa-user"></i>
                    </a>
                </li>
                <li>
                    <form action="" method="post">
                        <button class="logout" type="submit">
                            Cerrar sesión <i class="fas fa-sign-in-alt"></i>
                        </button>
                    </form>
                </li> -->
            <li>
                <a href="register.html">Creá tu cuenta <i class="far fa-address-card"></i>
                </a>
            </li>
            <li>
                <a href="login.html">Ingresá <i class="fas fa-sign-in-alt"></i></a>
            </li>
        </ul>
    </nav>
</div>
</header>