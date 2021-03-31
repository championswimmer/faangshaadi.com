<template>
  <nav class="navbar navbar-light navbar-expand-md bg-light">
    <div class="container-fluid ms-2 mt-2">
      <a class="navbar-brand" href="#">
        <img
          src="@/assets/fs-logo-main.svg"
          alt="FAANGShaadi Logo"
          height="40"
        />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item h5 ms-auto me-4">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item h5 ms-auto me-4">
            <a class="nav-link" href="#features">Features</a>
          </li>
          <li class="nav-item h5 ms-auto me-4">
            <a class="nav-link" href="#about">How?</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class NavBar extends Vue {}
</script>