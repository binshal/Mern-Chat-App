// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

const Message = () => {


	return (
		<div className={`chat`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src="" />
				</div>
			</div>
			<div className={`chat-bubble text-white pb-2`}>text of msg</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>TIme</div>
		</div>
	);
};
export default Message;
