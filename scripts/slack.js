window.onload = async () => {
    await getChannels();
    await getMembers();
    await sendMessage();
}

// チャンネルを取得する関数
async function getChannels() {
    try {
        const response = await fetch('http://localhost:8080/channels');
        const channels = await response.json();
        const channelSelect = document.getElementById('channelSelect');
        channels.forEach(channel => {
            const option = document.createElement('option');
            option.value = channel.id;
            option.textContent = `#${channel.name}`;
            channelSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Failed to fetch channels:', error);
    }
}

// メンバーを取得する関数
async function getMembers() {
    try {
        const response = await fetch('http://localhost:8080/members');
        const members = await response.json();
        const memberSelect = document.getElementById('memberSelect');
        members.forEach(member => {
            const option = document.createElement('option');
            option.value = member.id;
            option.textContent = member.real_name || member.name;
            memberSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Failed to fetch members:', error);
    }
}

// メッセージを送信する関数
async function sendMessage() {
    document.getElementById('sendMessageButton').addEventListener('click', async () => {
        try {
            const channelId = document.getElementById('channelSelect').value;
            const memberId = document.getElementById('memberSelect').value;
            const message = document.getElementById('messageInput').value;

            const response = await fetch('http://localhost:8080/sendSlackMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    channel: channelId,
                    mention: memberId,
                    message: message
                })
            });

            // メッセージ送信結果を表示
            const resultElement = document.getElementById('messageResult');
            resultElement.textContent = "メッセージを送信しました。";

        } catch (error) {
            console.error('Failed to send message:', error);

            // エラーが発生した場合はエラーメッセージを表示
            const resultElement = document.getElementById('messageResult');
            resultElement.textContent = "メッセージの送信に失敗しました。";
        }
    });
}
