

export default function FeedCard({postObject}){
return (
    <>
    <p> {postObject.user.username} : {postObject.body} </p>


    </>
)
}