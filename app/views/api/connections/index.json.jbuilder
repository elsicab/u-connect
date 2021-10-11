@connections.each do |connection|
    json.set! connection.id do
        json.extract! connection, :id, :connected_id, :connector_id, :created_at

        json.connected do 
            json.extract! connection.connected, :first_name, :last_name, :id
            json.avatar url_for(connection.connected.avatar) if connection.connected.avatar.attached?
        end
    end
end