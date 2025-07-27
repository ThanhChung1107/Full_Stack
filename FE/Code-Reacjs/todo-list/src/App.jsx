import React, { useState, useEffect } from 'react';

const ChatBox = () => {
  // Inline CSS
  const styles = {
    chatContainer: {
      display: 'flex',
      height: '80vh',
      maxWidth: '1200px',
      margin: '20px auto',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    chatSidebar: {
      width: '30%',
      borderRight: '1px solid #e0e0e0',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column'
    },
    sidebarHeader: {
      padding: '15px',
      borderBottom: '1px solid #e0e0e0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    newGroupBtn: {
      backgroundColor: '#ee4d2d',
      color: 'white',
      border: 'none',
      padding: '5px 10px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px'
    },
    newGroupBtnHover: {
      backgroundColor: '#d14326'
    },
    groupList: {
      flex: 1,
      overflowY: 'auto'
    },
    groupItem: {
      display: 'flex',
      padding: '12px 15px',
      cursor: 'pointer',
      borderBottom: '1px solid #eee',
      position: 'relative'
    },
    groupItemHover: {
      backgroundColor: '#f0f0f0'
    },
    groupItemActive: {
      backgroundColor: '#e8f4fc'
    },
    groupAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      marginRight: '10px'
    },
    groupInfo: {
      flex: 1,
      minWidth: 0
    },
    groupName: {
      margin: '0 0 5px 0',
      fontSize: '15px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    lastMessage: {
      margin: 0,
      fontSize: '13px',
      color: '#666',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    unreadCount: {
      backgroundColor: '#ee4d2d',
      color: 'white',
      borderRadius: '50%',
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '12px',
      position: 'absolute',
      right: '15px',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    chatMain: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff'
    },
    chatHeader: {
      padding: '15px',
      borderBottom: '1px solid #e0e0e0',
      textAlign: 'center'
    },
    messageArea: {
      flex: 1,
      padding: '15px',
      overflowY: 'auto',
      backgroundColor: '#f5f5f5'
    },
    message: {
      marginBottom: '15px',
      maxWidth: '70%'
    },
    messageSent: {
      marginLeft: 'auto'
    },
    messageReceived: {
      marginRight: 'auto'
    },
    senderName: {
      fontSize: '12px',
      color: '#666',
      display: 'block',
      marginBottom: '3px'
    },
    messageContent: {
      padding: '8px 12px',
      borderRadius: '18px',
      position: 'relative'
    },
    messageContentSent: {
      backgroundColor: '#ee4d2d',
      color: 'white',
      borderTopRightRadius: 0
    },
    messageContentReceived: {
      backgroundColor: '#e0e0e0',
      color: '#333',
      borderTopLeftRadius: 0
    },
    messageTime: {
      fontSize: '10px',
      opacity: '0.8',
      display: 'block',
      textAlign: 'right',
      marginTop: '3px'
    },
    messageInput: {
      display: 'flex',
      padding: '15px',
      borderTop: '1px solid #e0e0e0'
    },
    messageInputField: {
      flex: 1,
      padding: '10px 15px',
      border: '1px solid #e0e0e0',
      borderRadius: '20px',
      outline: 'none',
      fontSize: '14px'
    },
    sendButton: {
      backgroundColor: '#ee4d2d',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      padding: '0 20px',
      marginLeft: '10px',
      cursor: 'pointer'
    },
    sendButtonHover: {
      backgroundColor: '#d14326'
    },
    noGroupSelected: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      fontSize: '16px'
    }
  };

  // State and logic
  const [groups, setGroups] = useState([
    { id: 1, name: 'Nhóm đánh giá sản phẩm', lastMessage: 'Bạn đã xem sản phẩm mới chưa?', unread: 3, avatar: 'https://via.placeholder.com/40' },
    { id: 2, name: 'Hội yêu thích thời trang', lastMessage: 'Mẫu quần này đang giảm giá 50%', unread: 0, avatar: 'https://via.placeholder.com/40' },
    { id: 3, name: 'Nhóm đồ gia dụng', lastMessage: 'Máy xay sinh tố này rất bền', unread: 5, avatar: 'https://via.placeholder.com/40' },
    { id: 4, name: 'Thảo luận điện thoại', lastMessage: 'Điện thoại mới ra mắt tuần sau', unread: 0, avatar: 'https://via.placeholder.com/40' },
  ]);

  const [activeGroup, setActiveGroup] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [hoverStates, setHoverStates] = useState({
    newGroupBtn: false,
    sendButton: false
  });

  useEffect(() => {
    if (activeGroup) {
      // Simulate loading messages for the selected group
      const demoMessages = [
        { id: 1, sender: 'User1', text: 'Bạn đã mua sản phẩm này chưa?', time: '10:30 AM', isMe: false },
        { id: 2, sender: 'Bạn', text: 'Mình mua rồi, chất lượng rất tốt!', time: '10:32 AM', isMe: true },
        { id: 3, sender: 'User2', text: 'Giá cả thế nào vậy bạn?', time: '10:33 AM', isMe: false },
        { id: 4, sender: 'User1', text: 'Mình thấy trên Shopee đang có khuyến mãi', time: '10:35 AM', isMe: false },
      ];
      setMessages(demoMessages);
    }
  }, [activeGroup]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: 'Bạn',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isMe: true
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
    
    // Update last message in groups
    const updatedGroups = groups.map(group => {
      if (group.id === activeGroup) {
        return { ...group, lastMessage: newMessage, unread: 0 };
      }
      return group;
    });
    setGroups(updatedGroups);
  };

  const handleMouseEnter = (element) => {
    setHoverStates({ ...hoverStates, [element]: true });
  };

  const handleMouseLeave = (element) => {
    setHoverStates({ ...hoverStates, [element]: false });
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.chatSidebar}>
        <div style={styles.sidebarHeader}>
          <h3>Nhóm trò chuyện</h3>
          <button 
            style={{ 
              ...styles.newGroupBtn, 
              ...(hoverStates.newGroupBtn ? styles.newGroupBtnHover : {}) 
            }}
            onMouseEnter={() => handleMouseEnter('newGroupBtn')}
            onMouseLeave={() => handleMouseLeave('newGroupBtn')}
          >
            + Tạo nhóm mới
          </button>
        </div>
        <div style={styles.groupList}>
          {groups.map(group => (
            <div 
              key={group.id} 
              style={{ 
                ...styles.groupItem, 
                ...(activeGroup === group.id ? styles.groupItemActive : {}),
                ':hover': styles.groupItemHover
              }}
              onClick={() => setActiveGroup(group.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = styles.groupItemHover.backgroundColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 
                  activeGroup === group.id 
                    ? styles.groupItemActive.backgroundColor 
                    : 'transparent';
              }}
            >
              <img src={group.avatar} alt={group.name} style={styles.groupAvatar} />
              <div style={styles.groupInfo}>
                <h4 style={styles.groupName}>{group.name}</h4>
                <p style={styles.lastMessage}>{group.lastMessage}</p>
              </div>
              {group.unread > 0 && <span style={styles.unreadCount}>{group.unread}</span>}
            </div>
          ))}
        </div>
      </div>
      
      <div style={styles.chatMain}>
        {activeGroup ? (
          <>
            <div style={styles.chatHeader}>
              <h3>{groups.find(g => g.id === activeGroup)?.name}</h3>
            </div>
            <div style={styles.messageArea}>
              {messages.map(message => (
                <div 
                  key={message.id} 
                  style={{ 
                    ...styles.message, 
                    ...(message.isMe ? styles.messageSent : styles.messageReceived) 
                  }}
                >
                  {!message.isMe && <span style={styles.senderName}>{message.sender}</span>}
                  <div 
                    style={{ 
                      ...styles.messageContent, 
                      ...(message.isMe ? styles.messageContentSent : styles.messageContentReceived),
                      color: message.isMe ? 'white' : '#333'
                    }}
                  >
                    <p>{message.text}</p>
                    <span style={styles.messageTime}>{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={styles.messageInput}>
              <input
                type="text"
                style={styles.messageInputField}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Nhập tin nhắn..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                style={{ 
                  ...styles.sendButton, 
                  ...(hoverStates.sendButton ? styles.sendButtonHover : {}) 
                }}
                onClick={handleSendMessage}
                onMouseEnter={() => handleMouseEnter('sendButton')}
                onMouseLeave={() => handleMouseLeave('sendButton')}
              >
                Gửi
              </button>
            </div>
          </>
        ) : (
          <div style={styles.noGroupSelected}>
            <p>Vui lòng chọn một nhóm để bắt đầu trò chuyện</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;