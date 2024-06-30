In Loginform while using useParams--
Extending Record in RouteParams
Let's break down the specific code:

interface RouteParams extends Record<string, string | undefined> {
username: string;
}
Here's what each part means:

Record<string, string | undefined>:

This creates a type where keys are strings and values are either strings or undefined. This matches the general shape of URL parameters in useParams.
extends Record<string, string | undefined>:

By extending Record<string, string | undefined>, we are ensuring that RouteParams will be compatible with the type expected by useParams.
--------------------------------------------------------------------------------------------------------------this is how we initialize function in react with typescript
and useState interface defining

const Registration:React.FC = () => {
const[RegDetails,setRegDetails] = useState<RegistrationDetails>({username:'',password:'',email:''})

}
