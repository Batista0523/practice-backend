const db = require("../db/db.Config");

const getAllTeam = async () => {
  try {
    const allTeam = await db.any("SELECT * FROM team");
    console.log(allTeam, 'team in query');
    return allTeam;
  } catch (err) {
    console.error("Error getting all teams", err);
    throw err;
  }
};

const getOneTeam = async (id) => {
  try {
    const oneTeam = await db.one("SELECT * FROM team WHERE id=$1", [id]);
    return oneTeam;
  } catch (err) {
    console.error("Error getting one team", err);
    throw err;
  }
};

const deleteTeam = async (id) => {
  try {
    const deletedTeam = await db.one(
      "DELETE FROM team WHERE id=$1 RETURNING *",
      [id]
    );
    return deletedTeam;
  } catch (err) {
    console.error("Error deleting team", err);
    throw err;
  }
};

const createTeam = async (team) => {
  try {
    const { name, city, stadium, founded_year, championships, image } = team;
    const createdTeam = await db.one(
      "INSERT INTO team (name, city, stadium, founded_year, championships, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, city, stadium, founded_year, championships, image]
    );
    return createdTeam;
  } catch (err) {
    console.error("Error creating team", err);
    throw err;
  }
};

const updateTeam = async (id, team) => {
  try {
    const { name, city, stadium, founded_year, championships, image } = team;
    const updatedTeam = await db.one(
      "UPDATE team SET name=$1, city=$2, stadium=$3, founded_year=$4, championships=$5, image=$6 WHERE id=$7 RETURNING *",
      [name, city, stadium, founded_year, championships, image, id]
    );
    return updatedTeam;
  } catch (err) {
    console.error("Error updating team query", err);
    throw err;
  }
};


module.exports = {
  updateTeam,
  createTeam,
  getAllTeam,
  getOneTeam,
  deleteTeam,
};
