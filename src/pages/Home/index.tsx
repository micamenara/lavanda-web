import Hero from "../../components/web/Hero";
import FloatContainer from "../../components/web/FloatContainer";

import Button from "../../components/library/Button";
import Avatar from "../../components/library/Avatar";
import Input from "../../components/library/Input";
import Textarea from "../../components/library/Textarea";
import Checkbox from "../../components/library/Checkbox";

import Card, {
  CardImage,
  CardContent,
  CardHeader,
  CardActions,
} from "../../components/library/Card";
import { useState } from "react";

const Home = () => {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState(true);
  return (
    <div className="home">
      <Hero />
      <FloatContainer>
        <h1>Lavanda UI</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          scelerisque elit vitae purus egestas, eu placerat enim ullamcorper.
          Suspendisse potenti. Morbi vehicula tellus elit, nec mattis quam
          vehicula vitae. Morbi luctus, ante placerat elementum malesuada, velit
        </p>
        <div className="flex mb-10">
          <Button className="mr-10">Button</Button>
          <Button className="mr-10" disabled>
            Button
          </Button>
          <Button className="mr-10" variant="secondary">
            Button
          </Button>
          <Button variant="secondary" disabled>
            Button
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex alignItems">
              <Avatar>T</Avatar>
              <span className="ml-10">Tom Green</span>
            </div>
          </CardHeader>
          <CardImage
            alt="coffee"
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          />
          <CardContent>
            <h3 className="m-0">Colombian Coffee</h3>
            <p>
              Colombia is one of the world's top coffee exporters and we ship
              millions of bags of our finest beans abroad every year.
            </p>
          </CardContent>
          <CardActions>
            <a href="/">View More</a>
          </CardActions>
        </Card>
        <br />
        <div className="mt-10">
          <Input
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
            placeholder="Email"
            type="text"
          />
          <Textarea
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
            placeholder="Comment"
            rows={3}
          />
          <Checkbox
            className="mt-10"
            checked={val3}
            onChange={() => setVal3(!val3)}
          >
            Send email
          </Checkbox>
          <Button className="mt-10">Button</Button>
        </div>
      </FloatContainer>
    </div>
  );
};

export default Home;
