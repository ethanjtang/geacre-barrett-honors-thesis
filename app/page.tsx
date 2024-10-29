import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      {/* <Navigation/> */}
      {/* Move this to other pages ^^ */}
      <text>GEACRE Home</text>
      
        <div>
          <LoginLink>Sign in</LoginLink>
        </div>

        <div>
          <RegisterLink>Sign up</RegisterLink>  
        </div>

    </div>
  );
}
