import "@/Components/Tag/Tag.css"


function Tag({ tags }) {

    return (
        <div className="Tag_Container">
            {
                tags.map((tag) => {
                    return (<span className="Tag" key={tag}> {tag} </span>)
                })
            }
        </div>
    );
}
export default Tag;

