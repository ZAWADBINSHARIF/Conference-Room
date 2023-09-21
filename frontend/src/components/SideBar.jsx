// enternal import
import { Button, Row, Col } from "react-bootstrap"

// internal import 
import MenuListItem from "./MenuListItem"

const SideBar = () => {
  return (
    <menu className="SideBar">


      <section className="menuBar py-5">
        <Row className="
        px-2
        gap-2"
        >
          <Col>
            <Button className="menuButton">Save</Button>
          </Col>

          <Col>
            <Button className="menuButton">Delete</Button>
          </Col>

          <Col>
            <Button className="menuButton">Characters</Button>
          </Col>

          <Col>
            <Button className="menuButton">Tables</Button>
          </Col>

        </Row>
      </section>

      <div className="MenuList d-flex flex-column gap-3">

        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />
        <MenuListItem imgPath={'./activities-001.png'} />

      </div>
    </menu>
  )
}
export default SideBar