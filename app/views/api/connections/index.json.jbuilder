@connections.each do |connection|
    json.set! connection.id do
        json.extract! connection, :id, :connected_id, :connector_id, :created_at
    end
end