import TicketForm from "@/app/(components)/Ticket/CRUD/CreateTicket";
import UpdateTicketForm from "@/app/(components)/Ticket/CRUD/UpdateTicket";
import axios from "axios";

const getTicketById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/Tickets/${id}`,
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );

    if (!response.status === 200) {
      throw new Error("Failed to fetch topic");
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

let updateTicketData = {};
const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;

  if (EDITMODE) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
    return <UpdateTicketForm ticket={updateTicketData} />;
  } else {
    updateTicketData = {
      _id: "new",
    };
    return <TicketForm ticket={updateTicketData} />;
  }
};

export default TicketPage;
