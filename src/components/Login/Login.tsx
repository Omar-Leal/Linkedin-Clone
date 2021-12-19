import { 
  Container, 
  Form,
  Google, 
  Hero,
  Join, 
  Nav, 
  Section, 
  SignIn, 
} from "./Login.styles"
import { connect } from 'react-redux'
import { signInAction } from "../../redux/actions"


const Login = (props: any): JSX.Element => {
  return (
    <Container>
      <Nav>
        <a href='/' >
          <img src='/images/login-logo.svg' alt='linkedin'  />
        </a>
        <div>
          <Join> Join Now </Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>

        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src='/images/new-hero.svg'  />
        </Hero> 
        <Form>
          <Google
          onClick={ () => props.signin() }
          >
            <img src='/images/google.svg' />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
}

const mapStateToProps = ( state: any ) => { 
  return {

  }
}

const mapDispatchToProps = ( dispatch: any ) => ({
  signin: () => dispatch( signInAction() ),

})


export default connect( mapStateToProps, mapDispatchToProps )( Login );