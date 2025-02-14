const express = require("express");
const {
  updateTeam,
  createTeam,
  getAllTeam,
  getOneTeam,
  deleteTeam,
} = require("../Queries/teams");

const Team = express.Router();

Team.get("/", async (req, res) => {
  try {
    const allTeam = await getAllTeam();
    res.status(200).json({ success: true, payload: allTeam });
  } catch (err) {
    console.error("Error fetching all teams", err);
    res.status(500).json({ success: false, error: "Internal error" });
  }
});

Team.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneTeam = await getOneTeam(id);
    if (oneTeam) {
      res.status(200).json({ success: true, payload: oneTeam });
    } else {
      res.status(404).json({ success: false, error: "Team not found" });
    }
  } catch (err) {
    console.error("Error fetching team", err);
    res.status(500).json({ success: false, error: "Internal error" });
  }
});

Team.post("/", async (req, res) => {
  try {
   
    const createdTeam = await createTeam(req.body);
    res.status(201).json({ success: true, payload: createdTeam });
  } catch (err) {
    console.error("Error creating team", err);
    res.status(500).json({ success: false, error: "Internal error" });
  }
});

Team.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    const updatedTeam = await updateTeam(id, req.body);
    if (updatedTeam) {
      res.status(200).json({ success: true, payload: updatedTeam });
    } else {
      res.status(404).json({ success: false, error: "Team not found" });
    }
  } catch (err) {
    console.error("Error updating team", err);
    res.status(500).json({ success: false, error: "Internal error" });
  }
});

Team.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTeam = await deleteTeam(id);
    if (deletedTeam) {
      res.status(200).json({ success: true, payload: deletedTeam });
    } else {
      res.status(404).json({ success: false, error: "Team not found" });
    }
  } catch (err) {
    console.error("Error deleting team", err);
    res.status(500).json({ success: false, error: "Internal error" });
  }
});

module.exports = Team;
