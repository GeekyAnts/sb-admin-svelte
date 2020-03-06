<script>
  import Card from "sveltestrap/src/Card.svelte";
  import CardBody from "sveltestrap/src/CardBody.svelte";
  import CardHeader from "sveltestrap/src/CardHeader.svelte";
  import CardFooter from "sveltestrap/src/CardFooter.svelte";
  import Form from "sveltestrap/src/Form.svelte";
  import FormGroup from "sveltestrap/src/FormGroup.svelte";
  import Label from "sveltestrap/src/Label.svelte";
  import Input from "sveltestrap/src/Input.svelte";
  import Button from "sveltestrap/src/Button.svelte";
  import Row from "sveltestrap/src/Row.svelte";
  import Col from "sveltestrap/src/Col.svelte";
</script>

<Col class="col-lg-7">
  <Card class="shadow-lg border-0 rounded-lg mt-5">
    <CardHeader>
      <h3 class="text-center font-weight-light my-4">Create Account</h3>
    </CardHeader>
    <CardBody>
      <Form>
        <Row form>
          <div class="col-md-6">
            <FormGroup>
              <Label for="inputFirstName" class="small mb-1">First Name</Label>
              <Input
                class="py-4"
                type="text"
                name="firstName"
                id="inputFirstName"
                placeholder="Enter first name" />
            </FormGroup>
          </div>
          <div class="col-md-6">
            <FormGroup>
              <Label for="inputLastName" class="small mb-1">Last Name</Label>
              <Input
                class="py-4"
                type="text"
                name="lastName"
                id="inputLastName"
                placeholder="Enter last name" />
            </FormGroup>
          </div>
        </Row>
        <FormGroup>
          <Label for="exampleEmail" class="small mb-1">Email</Label>
          <Input
            class="py-4"
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter email address" />
        </FormGroup>
        <Row form>
          <div class="col-md-6">
            <FormGroup>
              <Label for="inputPassword" class="small mb-1">Password</Label>
              <Input
                class="py-4"
                type="password"
                name="inputPassword"
                id="inputPassword"
                placeholder="Enter password" />
            </FormGroup>
          </div>
          <div class="col-md-6">
            <FormGroup>
              <Label for="inputConfirmPassword" class="small mb-1">
                Confirm Password
              </Label>
              <Input
                class="py-4"
                type="password"
                name="inputConfirmPassword"
                id="inputConfirmPassword"
                placeholder="Confirm password" />
            </FormGroup>
          </div>
        </Row>
        <FormGroup class="mt-4 mb-0">
          <Button color="primary" block href="pages/authentication/login">
            Create Account
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
    <CardFooter class="text-center small">
      <a href="pages/authentication/login">Have an account? Go to login</a>
    </CardFooter>
  </Card>
</Col>
