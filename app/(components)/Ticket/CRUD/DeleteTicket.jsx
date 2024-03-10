"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import axios from "axios";

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/Tickets/${id}`
      );
      if (response.status === 200) {
        router.refresh();
      } else {
        console.error("Failed to delete ticket");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
