import "./Featured.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import bgcard from "../Images/bgcard.png";
import barcode from "../Images/barcode.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentsIcon from "@mui/icons-material/Payments";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

function Featured() {
  return (
    <div>
      <div className="Featured">
        <h1 className="Featuredtext">Featured Events</h1>
      </div>

      <div>
        <Card sx={{ maxWidth: 345 }} className="Card">
          <CardActionArea>
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="140"
                src={bgcard}
                alt="Bg cars"
              />
              <Typography
                variant="h6"
                component="div"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  padding: "8px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                SNS and Instant Win
              </Typography>
            </div>
            <CardContent className="CardContent">
              <div className="row">
                <div className="column">
                  <Typography
                    className="time"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Time
                  </Typography>
                  <div className="ket">
                    <AccessTimeIcon />
                    <Typography
                      className="realtime"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      19:00 GMT+7
                    </Typography>
                  </div>
                </div>
                <div className="column">
                  <Typography
                    className="date"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Date
                  </Typography>
                  <div className="ket">
                    <CalendarMonthIcon />
                    <Typography
                      className="realdate"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      31/04/2023
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <Typography
                    className="creator"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Creator
                  </Typography>
                  <div className="ket">
                    <SupervisedUserCircleIcon />
                    <Typography
                      className="creatordesc"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Star wars
                    </Typography>
                  </div>
                </div>
                <div className="column">
                  <Typography
                    className="eventprice"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    Event Price
                  </Typography>
                  <div className="ket">
                    <PaymentsIcon />
                    <Typography
                      className="coin"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      2 Coin
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="barcode-container">
                <img className="barcode" src={barcode} alt="Barcode" />
                <Typography className="barcode-text" variant="body2">
                  Have any<br />question?<br />Just scan<br />this QR!
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>

     
      </div>
    </div>
  );
}

export default Featured;
