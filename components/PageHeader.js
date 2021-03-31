import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "4em",
    maxWidth: "660px",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.info.main,
  },
}));

const PageHeader = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <Typography variant="h1" gutterBottom align="center">
          ND60 everdellers
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          align="center"
        >
          This is a statically generated blog example using Next.js and
          Contentful.
          <br />  special thanks(for coding this webcite)&#8594;{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/SatoruAkiyama/blog-with-nextjs-and-contentful"
            className={classes.link}
          >
            here
          </a>
          .<br /> How you become No.1 everdeller&#8594;{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/watch?v=BzyLXvtA-II"
            className={classes.link}
          >
            English
          </a>{" "}
          ,{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://everdell.herokuapp.com/"
            className={classes.link}
          >
            Japanese
          </a>
          .<br />
          INN keeper{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/watch?v=X0pG5soPkaY"
            className={classes.link}
          >
            here
          </a>
          .
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
