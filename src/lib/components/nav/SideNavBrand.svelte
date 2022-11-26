<div class:side-nav-brand={true}>
  <img src="logo.png" alt="Dailyhunt logo" class="larger" />
  <img src="logo-face.png" alt="Dailyhunt logo" class="smaller" />
</div>

<style>
  div.side-nav-brand {
    padding: 16px 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  img.larger {
    width: 100%;
  }

  img.smaller {
    display: none;
  }

  @media only screen and (max-width: 800px) {
    img.smaller {
      display: block;
      height: 30px;
    }

    img.larger {
      display: none;
    }
  }
</style>
