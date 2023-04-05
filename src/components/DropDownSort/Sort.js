import { useState } from "react";
import Style from "../../pages/NewsFeed/newsFeed.module.css";
import { Dropdown as AntdDropdown, Space } from "antd";
import { Dropdown } from "react-bootstrap";
import {
  apiCategory,
  apiDepartment,
  apiIdeaByCategory,
  apiIdeaByDepartment,
  apiIdeaSort,
} from "../../api/Api";
import { useEffect } from "react";

function Sort({ token, setDataIdea }) {
  //for sort idea
  const [selectedOptionToSort, setSelectedOptionToSort] = useState(
    "--Please choose an option to sort--"
  );

  function handleSelect(eventKey) {
    let sortType = "";
    switch (eventKey) {
      case "Most Likes":
        sortType = "mpi";
        break;
      case "Most Views":
        sortType = "mvi";
        break;
      case "Newest":
        sortType = "lid";
        break;
      default:
        break;
    }
    setSelectedOptionToSort(eventKey);
    sortIdea(sortType);
  }

  const sortIdea = (sortType) => {
    fetch(apiIdeaSort + "/?sortType=" + sortType, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataIdea(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //filter posst
  const [departmentData, setDepartmentData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch(apiDepartment, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setDepartmentData(data);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(apiCategory, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoryData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  const items = [
    {
      key: "1",
      label: "department",
      children: departmentData.map((department) => {
        return {
          key: `dep-${department.depId}`,
          label: department.name,
        };
      }),
    },
    {
      key: "2",
      label: "category",
      children: categoryData.map((category) => {
        return { key: `cate-${category.id}`, label: category.name };
      }),
    },
  ];

  const handleMenuSelect = ({ key }) => {
    const isDepartment = items[0].children.some((item) => item.key === key);
    const isCategory = items[1].children.some((item) => item.key === key);

    if (isDepartment) {
      console.log("Selected department:", key.substring(4, 5));

      // Call API to get ideas by department
      fetch(apiIdeaByDepartment + "/" + key.substring(4, 5), {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setDataIdea(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (isCategory) {
      console.log("Selected category:", key.substring(5, 6));
      // Call API to get ideas by category
      fetch(apiIdeaByCategory + "/" + key.substring(5, 6), {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setDataIdea(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={Style.arrange}>
      <div className="d-flex justify-content-between">
        <div>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedOptionToSort}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Most Likes">Most Likes</Dropdown.Item>
              <Dropdown.Item eventKey="Most Views">Most Views</Dropdown.Item>
              <Dropdown.Item eventKey="Newest">Newest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <AntdDropdown
          trigger={["click"]}
          menu={{
            items,
            onClick: handleMenuSelect,
          }}
        >
          <Space>Cascading menu</Space>
        </AntdDropdown>
      </div>
    </div>
  );
}
export default Sort;
