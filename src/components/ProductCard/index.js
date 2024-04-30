import { Button, Card, CardContent, Typography } from "@mui/material";

export function ProductCard(props) {
  const {} = props;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">testData</Typography>
        <Button variant="contained" color="success">
          Add To Cart
        </Button>
        <Typography variant="h6">testData</Typography>
        <Typography variant="h6">testData</Typography>
      </CardContent>
    </Card>
  );
}
