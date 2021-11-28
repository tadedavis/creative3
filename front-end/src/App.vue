<template>
  <div id="app">
    <div id="wrap">
    <div id="nav">
    <router-link to="/">
      <p> Home Page</p>
    </router-link>
      <h1> General Q&A Page</h1>
    </div>
    <router-view />
    <footer class='footer'>
    GitHub Repository: <a href="https://github.com/tadedavis/creative3">linked here/</a>
    </footer>
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position:relative;
  min-height: 95vh;
  background-image: url("../public/images/background.png");
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #blue;
}

#nav a.router-link-exact-active {
  color: blue;
}

#wrap {
  padding-bottom: 2.5rem;
}

.footer {
    position: absolute;
    background: #000;
    width: 100%;
    bottom: 0;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
    text-align: center;
    color: white;
}

</style>
