export default function messages(messages) {
    return`
// <div>
// ${messages.docs.map(messages => {
const messageData = message.data();
console.log(messageData);
})}
</div>
`;
}

