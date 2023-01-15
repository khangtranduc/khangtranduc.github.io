<div class="container-fluid">
    <h1>Education</h1>
    <ul>
        <li>
            <hgroup>
                <h3>2016</h3>
                <p>Le minecraft</p>
            </hgroup>
        </li>
    </ul>
</div>

<style lang="scss">
    .container-fluid {
        background-color: rgb(236, 236, 236);
        display: flex;
        justify-content: center;
        align-items: start;
        text-align: center;

        h1 {
            flex: 1;
        }
        ul {
            flex: 2;
            li {
                list-style-type: none;
                border: solid;
                &::before {
                    content: "::before";
                    width: 1rem;
                    height: 1rem;
                    background-color: green;
                    // border: solid;
                    // border-radius: 100%;
                }
            }
        }
    }
</style>