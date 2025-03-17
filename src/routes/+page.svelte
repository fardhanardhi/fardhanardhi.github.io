<script>
  import { onMount } from 'svelte';

  // You can customize these values
  const name = 'Fardhan Ardhi';
  const bio = [
    "Hi! I'm a Software Engineer based in Indonesia 🇮🇩",
    'Recently working with Flutter, Svelte and React.'
  ].join('\n');
  const subBio = [
    'Currently working with Majoo, building POS system to empower MSMEs in Indonesia in growing their businesses.'
  ].join('\n');

  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/fardhanardhi', icon: 'github' },
    { name: 'Instagram', url: 'https://instagram.com/fardhan.rd', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/fardhanardhi', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:far.dev.id@gmail.com', icon: 'mail' }
  ];

  // Dark mode state
  let darkMode = $state(false);
  let isLoad = $state(false);
  let classActive = $derived(isLoad ? 'opacity-100' : 'opacity-0');

  // Toggle dark mode function
  function toggleDarkMode() {
    darkMode = !darkMode;

    // Update localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
    }

    // Update document class
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // Initialize dark mode from localStorage or system preference
  onMount(() => {
    // Check localStorage first
    const savedDarkMode = localStorage.getItem('darkMode');

    if (savedDarkMode !== null) {
      // Use saved preference
      darkMode = savedDarkMode === 'true';
    } else {
      // Check system preference
      darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Apply initial state
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
</script>

<svelte:head>
  <!-- Add this script to make Tailwind dark mode work -->
  <script>
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</svelte:head>

<main
  class="flex min-h-screen flex-col items-center justify-center bg-white p-4 transition-colors duration-200 md:p-24 dark:bg-gray-900"
>
  <!-- Dark Mode Toggle -->
  <button
    class="absolute top-4 right-4 rounded-full bg-gray-200 p-2 text-gray-800 transition-colors duration-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
    onclick={toggleDarkMode}
    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
  >
    {#if darkMode}
      <!-- Sun icon for light mode -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-sun"
        ><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"
        ></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path
          d="M2 12h2"
        ></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path
          d="m19.07 4.93-1.41 1.41"
        ></path></svg
      >
    {:else}
      <!-- Moon icon for dark mode -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg
      >
    {/if}
  </button>

  <div class="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
    <!-- Profile Photo -->
    <div
      class="profilebg mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-gray-200 transition-colors duration-200 md:h-40 md:w-40 dark:border-gray-700"
    >
      <img
        onload={() => {
          isLoad = true;
        }}
        src="https://gravatar.com/avatar/fbb1f6287e41d6458fa8f5d24b71ee56?size=256"
        alt="Profile"
        class="h-full w-full object-cover {classActive} transition-opacity duration-500"
      />
    </div>

    <!-- Name -->
    <h1
      class="mb-4 text-4xl font-bold text-gray-900 transition-colors duration-700 md:text-5xl dark:text-white"
    >
      {name}
    </h1>

    <!-- Brief Bio - Optional -->
    <p
      class="mb-8 max-w-md text-lg text-gray-600 transition-colors duration-700 dark:text-gray-400"
    >
      {bio}
    </p>

    <!-- Brief Sub Bio - Optional -->
    <!-- <p class="mb-8 max-w-md text-lg text-gray-600 dark:text-gray-400"> -->
    <!-- <p class="mb-8 max-w-md text-sm text-gray-500 dark:text-gray-400">
			{subBio}
		</p> -->

    <!-- Social Media Links -->
    <div class="mb-8 flex flex-wrap justify-center gap-3">
      {#each socialLinks as link}
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:transition-none hover:duration-0 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          {#if link.icon === 'github'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github"
              ><path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              ></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg
            >
          {:else if link.icon === 'instagram'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-instagram"
              ><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
              ></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg
            >
          {:else if link.icon === 'linkedin'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin"
              ><path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              ></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"
              ></circle></svg
            >
          {:else if link.icon === 'mail'}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail"
              ><rect width="20" height="16" x="2" y="4" rx="2"></rect><path
                d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
              ></path></svg
            >
          {/if}
        </a>
      {/each}
    </div>

    <!-- Footer -->
    <footer class="text-sm text-gray-500 transition-colors duration-700 dark:text-gray-400">
      Made with ❤️ by {name.split(' ').at(0)}
    </footer>
  </div>
</main>

<style>
  .profilebg {
    background-color: #cfd5e2;
  }

  /* This ensures the dark mode works with Tailwind */
  :global(html) {
    height: 100%;
    background-color: var(--color-gray-900);
  }

  :global(body) {
    height: 100%;
    margin: 0;
    font-family:
      -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }
</style>
