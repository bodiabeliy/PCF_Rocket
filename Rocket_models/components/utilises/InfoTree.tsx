import * as React from 'react'
import { ForkOutlined, NodeCollapseOutlined, NodeExpandOutlined } from '@ant-design/icons';
import { Card, List, Popover } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Tree, TreeNode } from 'react-organizational-chart';

import InfoTreePreviewInfo from './InfoTreePreviewInfo'

import './index.css'
const InfoTree = (infoTreeData: any) => {

  let [parentNode, setParentNode] = React.useState<any>([])

  const [L2ParentNode, setL2ParentNode] = React.useState<any>([])
  const [isL3ItemsOpen, setIsL3ItemsOpen] = React.useState(false)
  const [parentTrees, setParentTrees] = React.useState<boolean>(false)


  const [parentFirstStage, setParentFirstStage] = React.useState(false)
  const [parentInterStage, setParentIntertStage] = React.useState(false)


  const [categoryIndexLandingLegs, setCategoryIndexLandingLegs] = React.useState<any>(false)
  const [categoryIndexEngines, setCategoryIndexEngines] = React.useState<any>(false)
  const [categoryIndexFins, setCategoryIndexFins] = React.useState<any>(false)
  const [categoryIndexBody, setCategoryIndexBody] = React.useState<any>(false)
  const [categoryIndexTanks, setCategoryIndexTanks] = React.useState<any>(false)



  React.useEffect(() => {
    setParentNode(infoTreeData.props.raw.L2Items);
    groupedCtegories(parentNode)
  }, [infoTreeData.props.raw.L2Items, parentNode])



  const groupedCtegories = (groupedElements: any) => {
    groupedElements.map((element: any) => {

      const groupedSubCategories = groupBy(element.L3Items, "Category")
      groupedElements  =[groupedSubCategories]
      setL2ParentNode(groupedElements);
      return groupedSubCategories;
    })
  }

  const openParentTrees = (L2Item: any, L2Index: any) => {
    console.log("L2Item", L2Item);

    if (L2Index == 0) {

      switch (L2Item.Name) {
        case "First stage":
          console.log("work!");
          console.log("L2ParentNode", L2ParentNode);
          
          setParentFirstStage(!parentFirstStage)
      }
    }

    if (L2Index == 1) {

      switch (L2Item.Name) {
        case "Inter stage":
          console.log("work-2!");
          setParentIntertStage(!parentInterStage)
      }
    }
  }


  const openInfoTreeGroups = (categoriesIndex: any, categoryName: any) => {
    let categories = Array.from(Object.keys(L2ParentNode[0]))
    categories.filter((category, index) => {
      switch (categoriesIndex == index && category.includes(categoryName) && category) {
        case "Leg":
          setCategoryIndexLandingLegs(!categoryIndexLandingLegs);
          break;
        case "Engine":
          setCategoryIndexEngines(!categoryIndexEngines)
          break;
        case "Fin":
          setCategoryIndexFins(!categoryIndexFins)
          break;
        case "Body":
          setCategoryIndexBody(!categoryIndexBody)
          break;
        case "Tank":
          setCategoryIndexTanks(!categoryIndexTanks)
          break
      }
    })

  }



  const groupBy = (array: any, key: any) => {
    return array.reduce((result: any, currentValue: any) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {})
  };


  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={
        <Card
          className='infoTreeCard'

        >
          <Meta title={infoTreeData.props.raw.Name} description={infoTreeData.props.raw.Description} />
        </Card>
      }
    >

      {

        parentNode?.map((L2Item: any, L2Index: any) => {

          return (
            <TreeNode label={
              <Card
                className='infoTreeCard'

              >
                <Meta
                  avatar={
                    <NodeExpandOutlined onClick={() => openParentTrees(L2Item, L2Index)} />}
                  title={L2Item.Name}
                  description={L2Item.Description}
                />
                {L2Item.Name == "First stage" && parentFirstStage ?
                  <>
                    <TreeNode className='infoTreeCardSubChildren' label={Object.entries(L2ParentNode[0]).map((Categories: any, indx: any) => {

                      return (
                        <TreeNode label={
                          <>
                            <Card
                              className='infoTreeCard'
                            >
                              <Meta
                                className='infoTreeCardSubChildren__description'
                                avatar={
                                  <NodeExpandOutlined onClick={() => openInfoTreeGroups(indx, Categories[0])} />}
                                title={Categories[0]}
                                description={
                                  (categoryIndexLandingLegs ||
                                    categoryIndexEngines ||
                                    categoryIndexFins ||
                                    categoryIndexBody ||
                                    categoryIndexTanks) == true ? `Nested modules: ${Categories[1].length}` : null} />

                              {Categories[0] == "Leg" && categoryIndexLandingLegs ?

                                <List
                                  // id={index.toString()}
                                  className="infoTreeList"
                                  // loading={initLoading}
                                  itemLayout="horizontal"
                                  dataSource={Categories[1]}
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
                                : Categories[0] == "Engine" && categoryIndexEngines ?
                                  <List
                                    // id={index.toString()}
                                    className="infoTreeList"
                                    // loading={initLoading}
                                    itemLayout="horizontal"
                                    dataSource={Categories[1]}
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
                                  : Categories[0] == "Fin" && categoryIndexFins ?
                                    <List
                                      // id={index.toString()}
                                      className="infoTreeList"
                                      // loading={initLoading}
                                      itemLayout="horizontal"
                                      dataSource={Categories[1]}
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
                                    : Categories[0] == "Body" && categoryIndexBody ?

                                      <List
                                        // id={index.toString()}
                                        className="infoTreeList"
                                        // loading={initLoading}
                                        itemLayout="horizontal"
                                        dataSource={Categories[1]}
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
                                      : Categories[0] == "Tank" && categoryIndexTanks ?

                                        <List
                                          className="infoTreeList"
                                          // loading={initLoading}
                                          itemLayout="horizontal"
                                          dataSource={Categories[1]}
                                          renderItem={(category: any) => (

                                            <Popover content={<InfoTreePreviewInfo data={category} />} title="Detailize info" trigger="click" >
                                              <List.Item
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
                                        : null}
                            </Card>
                          </>
                        }>
                        </TreeNode>
                      )
                    })}>
                    </TreeNode>
                  </> : L2Item.Name == "Inter stage" && parentInterStage ?
                    <>test</>
                    : null
                }
              </Card>
            } />
          )
        }
        )}

    </Tree>
  );
}

export default InfoTree;