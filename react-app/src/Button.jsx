function handleClick(event){
    console.log("Hello");
    console.log(event);
}

function handleMouseOver() {
    console.log("Bye!");
}
function handleDblClick() {
    console.log("You double clicked.")
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cupiditate corporis qui, molestias nesciunt ipsa praesentium quod hic ut doloribus inventore vitae quam, vel aliquam adipisci aut mollitia iure illo?
            Non voluptatem inventore illum quo. Modi laudantium voluptas quidem numquam hic optio quos, ipsam doloribus? Dignissimos nisi vitae eos consequuntur perferendis, cumque natus, nulla, dolorum exercitationem ratione alias minima tenetur.
            Illo officiis nisi nesciunt sed nobis optio sit harum, necessitatibus quo autem fugiat consequuntur dolores, alias deserunt hic velit. Autem maiores deleniti ullam neque. Odio laboriosam reiciendis tempora ducimus provident.</p>
            <button onDoubleClick={handleDblClick}>double click me</button>
        </div>
    );
}
