import { ForkOutlined } from '@ant-design/icons';
import { Card, List, Popover } from 'antd';
import Meta from 'antd/lib/card/Meta';
import * as React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart';

import InfoTreePreviewInfo from './InfoTreePreviewInfo'

import './index.css'
const InfoTree = (infoTreeData: any) => {

  let [parentNode, setParentNode] = React.useState<any>([])
  const [L2ParentNode, setL2ParentNode] = React.useState<any>([])

  const [isL3Items, setIsL3Items] = React.useState([])
  const [isL3ItemsOpen, setIsL3ItemsOpen] = React.useState(true)


  React.useEffect(() => {

    setParentNode(infoTreeData.props.raw.L2Items);
    groupedCtegories(parentNode)
  }, [infoTreeData.props.raw.L2Items, parentNode])


  const groupedCtegories = (elements: any) => {

    elements.map((element: any) => {

      const groupedSubCategories = groupBy(element.L3Items, "Id")
      console.log("groupedSubCategories", groupedSubCategories);
      elements = [groupedSubCategories]
      console.log("L3 elements by group", elements);
      setL2ParentNode(elements)

      return groupedSubCategories
    })
  }



  const groupBy = (array: any, key: any) => {
    return array.reduce((result: any, currentValue: any) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {}); // empty object is the initial value for result object
  };

  const detailedDescription = (previewInfo: any) => {
    return (
      <InfoTreePreviewInfo data={previewInfo} />
    )
  }

  return (
    <Tree
      lineWidth={'2px'}
      lineColor={'green'}
      lineBorderRadius={'10px'}
      label={
        <Card
          className='infoTreeCard'
          hoverable
        >
          <Meta title={infoTreeData.props.raw.Name} description={infoTreeData.props.raw.Description} />
        </Card>
      }
    >
      {parentNode?.map((L2Item: any) => {
        // L2ParentNode[0] ? console.log("L2ParentNode", Object.entries(L2ParentNode[0])) : null
        return (
          <TreeNode label={
            <Card
              className='infoTreeCard'
              hoverable
            >
              <Meta title={L2Item.Name} description={L2Item.Description} />
              {
                L2ParentNode[0] ?
                  <TreeNode className='infoTreeCardSubChildren' label={Object.entries(L2ParentNode[0]).map((Categories: any) => {

                    return (
                      <TreeNode label={
                        <Card
                          className='infoTreeCard'
                        >
                          <Meta title={Categories[0]} />
                          <List
                            className="infoTreeList"
                            // loading={initLoading}
                            itemLayout="horizontal"
                            dataSource={Categories[1]}
                            renderItem={(category:any) => (
                              <List.Item
                                actions={[<a key="list-loadmore-more">more</a>]}
                              >
                              <List.Item.Meta
                              title={category.Name}
                              description={category.Description}
                              
                              >
                               
                              </List.Item.Meta>
                               
                              </List.Item>
                            )}
                          />
                        </Card>
                      }>
                      </TreeNode>
                    )
                  })}>
                  </TreeNode>
                  : null
              }
            </Card>
          }>
          </TreeNode>
        )
      }
      )}

    </Tree>
  );
}

export default InfoTree;