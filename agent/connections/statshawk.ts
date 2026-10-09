import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.statshawk.ai/mcp",
  description: "Get scores, standings, box scores, and player stats across sports.",
  auth: connect("mcp.statshawk.ai/" + process.env.VERCEL_PROJECT_ID),
});
