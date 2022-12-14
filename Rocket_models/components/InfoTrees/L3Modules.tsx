import { NodeExpandOutlined } from "@ant-design/icons";
import { Card, List, Popover } from "antd";
import Meta from "antd/lib/card/Meta";
import * as React from "react"
import { TreeNode } from "react-organizational-chart";
import InfoTreePreviewInfo from "../DetailizeInfo/L3ItemsPreviewInfo";

/* 
    L3Modules - tree components for L3
*/ 
const L3Modules = (categoryModules: any) => {

/* 
  set default state of components variables
  useState - special React functionality, that allows control all changes thanks setter function (second argument)
*/ 
    const [selectedCategory, setSelectedCategory] = React.useState(categoryModules.categoryModules[0])
    const [isSelectedCategory, setIsSelectedCategory] = React.useState<boolean>(false)

    
/* 
    function opening nested Modules by categories
*/ 
    const openInfoTreeGroups = (categoryName: any) => {
        let categories = Array.from(Object.keys(categoryModules.categoriesList))
        for (let category of categories) {
            if (category == categoryName) {
                setSelectedCategory(category)
                setIsSelectedCategory(!isSelectedCategory)
            }
        }
    }

    return (
        <>
            <TreeNode label={
                <>
                    {categoryModules.categoryModules[0] != "null" ?
                        <Card
                            className='infoTreeCard'>
                            <Meta
                                className='infoTreeCardSubChildren__description'
                                avatar={
                                    <NodeExpandOutlined onClick={() => openInfoTreeGroups(categoryModules.categoryModules[0])} />}
                                title={categoryModules.categoryModules[0] != "null" ? categoryModules.categoryModules[0] : null}
                                description={
                                    (isSelectedCategory) == false ? `Nested modules: ${categoryModules.categoryModules[1].length}` : null}
                            />
                            {categoryModules.categoryModules[0] == selectedCategory && isSelectedCategory ?
                                <>
                                    <List
                                        className="infoTreeList"
                                        // loading={initLoading}
                                        itemLayout="horizontal"
                                        dataSource={categoryModules.categoryModules[1]}
                                        renderItem={(category: any) => (

                                            <Popover className="schema__popover" content={<InfoTreePreviewInfo data={category} />} title="Detailize info" trigger="click" >

                                                <List.Item
                                                // actions={[<a onClick={() => detailedDescription(category)}>more</a>]}
                                                >
                                                    <List.Item.Meta
                                                    className="schema__popover-element"
                                                        title={category.Name}
                                                        description={category.Description}
                                                    >

                                                    </List.Item.Meta>

                                                </List.Item>
                                            </Popover>
                                        )}
                                    />
                                </>
                                : null}
                        </Card>
                        :
                        <>
                        <List
                            className="infoTreeList"
                            // loading={initLoading}
                            itemLayout="horizontal"
                            dataSource={categoryModules.categoryModules[1]}
                            renderItem={(category: any) => (

                                <Popover content={<InfoTreePreviewInfo data={category} />} title="Detailize info" trigger="click" >

                                    <List.Item
                                    // actions={[<a onClick={() => detailedDescription(category)}>more</a>]}
                                    >
                                        <List.Item.Meta
                                            title={category.Name}
                                            description={category.Description}
                                        >

                                        </List.Item.Meta>

                                    </List.Item>
                                </Popover>
                            )}
                        />
                    </>
                    }
                </>
            }>
            </TreeNode>
        </>);
}

export default L3Modules;