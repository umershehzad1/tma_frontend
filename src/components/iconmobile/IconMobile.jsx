import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./IconMobile.css"
const IconMobile = ({icons}) => {
  return (
   <>
    <Container>
    <div className="d-flex overflow-auto my-4 ">
          {icons?.map((icon, index) => (
            
              <div
                className="text-center icons my-2 mx-2 "
                style={{
                  borderRight:
                    index !== icons.length - 1
                      ? "1px solid rgba(230, 230, 230, 1)"
                      : "none",
                     
                }}
              >
                {icon.logo}
              </div>
            
          ))}
        </div>
      </Container>
   </>
  )
}

export default IconMobile
