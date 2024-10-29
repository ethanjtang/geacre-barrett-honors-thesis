
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image"
import './globals.css';

export default function Home() {
  return (
    <div className="home-page">
        <div className="center-div">
          <Image
            src="/green_expectations_logo.png"
            alt="Green Expectations Logo"
            width={100}
            height={100}
          />
          <h1>GEACRE Home</h1>
        </div>
        
        <div className="center-div">
          <LoginLink>
            Sign in
          </LoginLink>
        </div>

        <div className="center-div">
          <RegisterLink>Register</RegisterLink>  
        </div>

    </div>
  );
}
