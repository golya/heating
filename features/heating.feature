Feature: Heating Control
  As a builing caretaker I would like
  to control the rooms heating

  Scenario: Set a room temprature
    Given a "temperature" sensor "sensor-1" in the room "room-1" with value "23"
    Given the heating control service is started
    When the "sensor-1" triggered a message
    Then the "sensor-1" value is "22"

