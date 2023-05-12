<div class='container-fluid'>
    <section>
        <img src='mugshot.jpeg' alt=''/>
        <hgroup>
            <h3>Tran Duc Khang</h3>
            <p>Epic Gamer</p>
            <div>
                <iconify-icon icon="fa6-brands:github" width="30"/>
                <iconify-icon icon="fa6-brands:linkedin" width="30"/>
                <iconify-icon icon="lucide:mail" width="30"/>
            </div>
        </hgroup>
    </section>

    <div>
        <section>
            <hgroup>
                <h2>About <span>Me</span></h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </hgroup>
        </section>

        <div class="grid">
            <article>
                <hgroup>
                    <h4>Education</h4>
                    <p><em>NUS High School of Math and Science</em></p>
                </hgroup>
                <button>
                    <span>More Info</span>
                    <iconify-icon icon="lucide:arrow-right"/>
                </button>
            </article>
                
            <article>
                <hgroup>
                    <h4>Current Project</h4>
                    <p><em>Shielding-Free Signal Noise Suppression in Portable Low-Field MRI</em></p>
                </hgroup>
                <button>
                    <span>More Info</span>
                    <iconify-icon icon="lucide:arrow-right"/>
                </button>
            </article>
        </div>
    </div>
    
</div>

<style lang="scss">
    .container-fluid{
        display: flex;
        gap: 3rem;
        justify-content: center;
        align-items: start;
        margin-top: 5rem;

        > div, 
        > section {
            height: 100%;

            section {
                margin: 0;
            }

            &:not(:first-child){
                p {
                    width: 40rem;
                }
            }

            .grid article {
                display: flex;
                flex-direction: column;
                padding: 1.25rem;
                margin: 0;
                justify-content: space-between;
                p {
                    width: 100%;
                }
                hgroup {
                    margin: 0;
                }
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: .5rem;
                }
            }

            h2 span {
                background: linear-gradient(to right, $primary-300, $primary-400);
                background-clip: text;
                color: transparent;
            }

            &:first-child {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;

                p {
                    font-size: 1.1rem;
                }

                iconify-icon {
                    transition: .1s;

                    &:hover {
                        color: gray;
                        transition: .1s;
                    }
                }
                
                div {
                    display: flex;
                    gap: .5em;
                    align-items: center;
                    justify-content: center;
                }

                img {
                    border-radius: 100%;
                    width: 8rem;
                    height: 8rem;
                    object-fit: cover;
                    object-position: 50% 10%;
                }
            }
        }
    }
</style>