import Layout from "components/layout/Layout";
import Social from "components/Social";

import { Container, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  snsIcon: {
    width: "30px",
    height: "30px",
    // color: theme.palette.primary.main,

    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  avator: {
    width: "8em",
    height: "8em",
    boxShadow: "0px 0px 10px 1px #b2b2b28f",
  },
}));

const About = () => {
  const classes = useStyles();
  // use ure name
  const name = 'ND phenix60';
  // use your picture
  const avatar =
    "https://img.cdn.nimg.jp/s/nicovideo/thumbnails/27301514/27301514.original/r1280x720l?key=3eb7f9e26fd53b566f3b2eda0a99850631d3b82ae6258208cc406e01563068b0";
  return (
    <Layout
      // type your page title and page description.
      title=" About | The Legend of ND Phenix"
      description="野球やれよ"
    >
      <Container maxWidth="md">
        <Grid container direction="column" spacing={8}>
          <Grid item>
            <Typography variant="h1" align="center" gutterBottom>
              About
            </Typography>
            <Typography variant="h2" align="center">
              Hello my name is {name}.
            </Typography>
          </Grid>
          <Grid item container spacing={2} alignItems="center">
            <Grid
              item
              container
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                {/* use your picture */}
                <Avatar alt="avatar" src={avatar} className={classes.avator} />
              </Grid>
              <Grid item>
                <Typography variant="h3">{name}</Typography>
              </Grid>
              <Social color />
            </Grid>
            <Grid item container md={8}>
              <Typography variant="body1">
                {/* your introduction */}
                <strong>Type your introduction.</strong>
                <br />
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;
