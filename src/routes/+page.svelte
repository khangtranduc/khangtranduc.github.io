<div class="container">
    <section class="grid">
        <div class="inner">
            <article class="info">
                <img class="profile" src="/mugshot.jpeg" alt=""/>
                <h4>Tran Duc Khang</h4>
                <p>Epic Gamer</p>
                <div class="flex">
                    <iconify-icon icon="fa6-solid:envelope" width="30"/>
                    <iconify-icon icon="fa6-brands:linkedin" width="30"/>
                    <iconify-icon icon="fa6-brands:github" width="30"/>
                </div>
            </article>           
            <article>
                <h4>Interests</h4>
                <ul>
                    <li>Physics</li>
                    <li>Engineering</li>
                    <li>Programming</li>
                </ul>
            </article>
        </div>
        <article>
            <h2>About Me</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna nulla, ullamcorper eu lobortis ac, rhoncus eu lacus. Integer tristique pellentesque malesuada. Donec molestie at leo at pellentesque. Duis tincidunt leo nec enim pretium pharetra ac sit amet enim. Sed congue tellus vel commodo porttitor. Suspendisse volutpat malesuada nunc sit amet pellentesque. Pellentesque nisl nunc, maximus at diam non, lacinia pharetra urna. Sed id felis vulputate, sollicitudin mauris id, aliquam ligula. Proin dolor ipsum, condimentum vitae eros sed, suscipit tempus neque. Aenean maximus, tellus in hendrerit ornare, lacus dolor lobortis nunc, sit amet hendrerit quam justo vitae ex. Etiam commodo tortor quis arcu cursus sodales sed eget ligula.
            </p>
        </article>
    </section>
</div>

<style lang="scss">
    .flex {
        display: flex;
        align-items: center;
    } 
    iconify-icon {
        color: black;
        &:hover {
            color: gray;
        }
    }
    .inner article:first-child {
        margin-bottom: 1%;
    }
    .inner article:last-child{
        margin-top: 1%;
    }
    h4 {
        margin: 2% 0 1% 0;
    }
    article p {
        display: flex;
        flex-wrap: wrap;
    }
    .info div {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
    .info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .profile {
        width: 10rem;
        height: 10rem;
        border-radius: 100%;
        object-fit: cover;
    }
</style>