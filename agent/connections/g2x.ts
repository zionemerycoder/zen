import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.g2x.com/mcp",
  description: "Research government contracting opportunities, contractors, and awards.",
  auth: connect("mcp.g2x.com/" + process.env.VERCEL_PROJECT_ID),
});
