import {Link} from 'react-router-dom'
export default function NavBar(){
    return(
        <>
        <ul class="flex">
  <li class="mr-6">
    <Link class="text-blue-500 hover:text-blue-800" to="/feed">Active</Link>
  </li>
  <li class="mr-6">
    <Link class="text-blue-500 hover:text-blue-800" to="/">Home</Link>
  </li>
  <li class="mr-6">
    <a class="text-blue-500 hover:text-blue-800">Link</a>
  </li>
  <li class="mr-6">
    <a class="text-gray-400 cursor-not-allowed" >Disabled</a>
  </li> 
</ul>

        </>
    )
}