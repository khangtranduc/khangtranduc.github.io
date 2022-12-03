<script>
  import "../app.postcss";
  import { 
    DarkMode,
    Navbar, NavBrand, NavLi, NavUl, NavHamburger,
    Footer, FooterIcon,
    P,
  } from 'flowbite-svelte';
  import {
    Github, Discord, Whatsapp, Telegram, Linkedin, Envelope
  } from 'svelte-bootstrap-svg-icons';
</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
        <img src="/profile.jpg" class="mr-3 h-6 sm:h-9 rounded-full" alt="Wavy Logo"/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Khang Tran
        </span>
    </NavBrand>
    <DarkMode/>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
    </NavUl>
  </Navbar>

<slot />


<Footer footerType="socialmedia" class="flex justify-around">
    <P color="text-gray-400 dark:text-white"  size="xs">Tran Duc Khang</P>
    <div class="flex flex-row-reverse flex-1 gap-x-5">
        <FooterIcon href="/" class="text-gray-400 hover:text-black">
        <Github/>
        </FooterIcon>
        <FooterIcon href="/" class="text-gray-400 hover:text-black">
        <Discord/>
        </FooterIcon>
        <FooterIcon href="/" class="text-gray-400 hover:text-black">
        <Whatsapp/>
        </FooterIcon>
        <FooterIcon href="/" class="text-gray-400 hover:text-black">
        <Telegram/>
        </FooterIcon>
        <FooterIcon href="/" class="text-gray-400 hover:text-black">
        <Linkedin/>
        </FooterIcon>
        <FooterIcon href="/" class="text-gray-400 hover:text-black">
        <Envelope/>
        </FooterIcon>
    </div>
</Footer>