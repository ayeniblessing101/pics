import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 49Dr7ccEqaJcxmA6PpF3oPTfPFksaYsroomGMZtxVwo",
  },
});
