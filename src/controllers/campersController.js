import Camper from "../models/Camper.js";
import axios from "axios";
import { getCampersFromCache } from "../services/campersCache.js";
import { filterCampers } from "../utils/filterCampers.js";
import { paginate } from "../utils/paginate.js";

const BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

// GET /campers
export const getCampers = async (req, res) => {
  try {
    const {
      location,
      form,
      features,
      page = 1,
      limit = 6,
    } = req.query;

    const allCampers = await getCampersFromCache();

    const filtered = filterCampers(allCampers, {
      location,
      form,
      features: features ? features.split(",") : [],
    });

    const paginated = paginate(
      filtered,
      Number(page),
      Number(limit)
    );

    res.json({
      total: filtered.length,
      page: Number(page),
      limit: Number(limit),
      items: paginated,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /campers/:id
export const getCamperById = async (req, res) => {
  try {
    const data = await getCampersFromCache();
    const items = Array.isArray(data) ? data : data.items;

    const camper = items.find(c => c.id === req.params.id);

    if (!camper) {
      return res.status(404).json({ message: "Camper not found" });
    }

    res.json(camper);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};