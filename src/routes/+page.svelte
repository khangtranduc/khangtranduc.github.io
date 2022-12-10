<script>
    import {
        P, Heading, Span,
        FooterIcon,
        Card,
        Button,
    } from "flowbite-svelte"
    import{
        Whatsapp, Envelope, Linkedin,
    } from "svelte-bootstrap-svg-icons"
</script>

<div class="py-[5rem] flex flex-row gap-x-[5rem] items-center">
    <section class="ml-[30rem] flex flex-col items-center justify-center flex-none">
        <img class="p-1 w-[12rem] h-[12rem] rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/mugshot-square.jpeg" alt="Bordered avatar">
        <P size="xl" weight="semibold">Tran Duc Khang</P>
        <P size="base">Student at NUS High</P>
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
    <div class="mr-[30rem] p-3">
        <article class="text-black dark:text-white">
            <Heading tag="h2">About <Span gradient>Me</Span></Heading>
            <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
            </P>
        </article>
        <Card class="mt-[1rem]">
            <Heading tag="h4" class="mb-[0.5rem]">Current5 Education</Heading>.
            <P class="mb-[1rem]">NUS High School of Math and Science</P>
            <Button class="w-fit">
                More Info <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Button>
        </Card>
    </div>
</div>