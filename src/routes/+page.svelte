<script>
    import {
        P,
        FooterIcon,
        Avatar,
    } from "flowbite-svelte"
    import{
        Whatsapp, Envelope, Linkedin,
    } from "svelte-bootstrap-svg-icons"
</script>

<div class="py-8 flex flex-row gap-x-12">
    <section class="ml-20 flex flex-col items-center justify-center">
        <Avatar src="/mugshot-square.jpeg" size="xl" border/>
        <P size="sm" weight="semibold">Tran Duc Khang</P>
        <P size="xs">Student at NUS High</P>
        <div class="flex justify-center gap-x-3 py-3">
            <FooterIcon href="/" class="text-gray-400 hover:text-black">
                <Envelope/>
            </FooterIcon>
            <FooterIcon href="/" class="text-gray-400 hover:text-black">
                <Whatsapp/>
            </FooterIcon>
            <FooterIcon href="/" class="text-gray-400 hover:text-black">
                <Linkedin/>
            </FooterIcon>
        </div>
    </section>
    <!-- <article class="p-3 text-black dark:text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.
    </article> -->
</div>